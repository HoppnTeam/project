import React, { useState } from 'react';
import { Briefcase, MapPin, Calendar, DollarSign, Plus } from 'lucide-react';
import { Job } from '../../types/community';
import JobForm from './forms/JobForm';

interface JobBoardProps {
  region: string;
}

export default function JobBoard({ region }: JobBoardProps) {
  const [showJobForm, setShowJobForm] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]); // In real app, fetch from API

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Job Board</h2>
        <button
          onClick={() => setShowJobForm(true)}
          className="flex items-center space-x-2 bg-gold text-black px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Post Job</span>
        </button>
      </div>

      <div className="space-y-6">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">{job.title}</h3>
                <div className="flex items-center space-x-4 mt-2 text-gray-600">
                  <span className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-1" />
                    {job.company}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {job.location}
                  </span>
                  <span className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1" />
                    {job.salary}
                  </span>
                </div>
              </div>
              <span className="bg-gold/10 text-gold px-3 py-1 rounded-full text-sm">
                {job.type}
              </span>
            </div>
            <p className="mt-4 text-gray-600">{job.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center text-gray-500">
                <Calendar className="w-4 h-4 mr-1" />
                <span>Posted {job.postedDate}</span>
              </div>
              <button className="bg-gold text-black px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Job Submission Form Modal */}
      {showJobForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
            <JobForm onClose={() => setShowJobForm(false)} onSubmit={(data) => {
              // Handle job submission
              setShowJobForm(false);
            }} />
          </div>
        </div>
      )}
    </div>
  );
}