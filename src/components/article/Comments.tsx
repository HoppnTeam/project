import React, { useState } from 'react';
import { Comment } from '../../types/article';
import { ThumbsUp } from 'lucide-react';

interface CommentsProps {
  comments: Comment[];
}

export default function Comments({ comments }: CommentsProps) {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle comment submission
    setNewComment('');
  };

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6">Comments</h2>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Join the discussion..."
          className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
          rows={4}
        />
        <button
          type="submit"
          className="mt-2 px-6 py-2 bg-gold text-black rounded-lg hover:bg-opacity-90 transition-colors"
        >
          Post Comment
        </button>
      </form>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={comment.author.avatar}
                alt={comment.author.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="font-bold">{comment.author.name}</h4>
                <span className="text-sm text-gray-500">{comment.createdAt}</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">{comment.content}</p>
            <button className="flex items-center space-x-2 text-gray-500 hover:text-gold">
              <ThumbsUp className="w-4 h-4" />
              <span>{comment.likes}</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}