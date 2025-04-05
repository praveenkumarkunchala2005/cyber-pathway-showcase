
import React from 'react';
import { Calendar, MapPin, Award, GraduationCap } from 'lucide-react';

interface EducationCardProps {
  institution: string;
  degree: string;
  location: string;
  duration: string;
  grade?: string;
  isActive?: boolean;
}

const EducationCard: React.FC<EducationCardProps> = ({
  institution,
  degree,
  location,
  duration,
  grade,
  isActive = false,
}) => {
  return (
    <div className={`cyber-card p-5 transition-all duration-300 hover:scale-[1.02] ${isActive ? 'border-cyber-glow/30 animate-glow' : ''}`}>
      <div className="flex items-start">
        <div className="bg-cyber-light/30 p-2 rounded-full mr-4">
          <GraduationCap className="h-6 w-6 text-cyber-glow" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-space font-bold text-white mb-1">
            {institution}
          </h3>
          <p className="text-lg text-gray-300 mb-2">{degree}</p>
          
          <div className="flex flex-col space-y-2 mt-3">
            <div className="flex items-center text-sm text-gray-400">
              <MapPin className="h-4 w-4 mr-2 text-cyber-accent" />
              <span>{location}</span>
            </div>
            
            <div className="flex items-center text-sm text-gray-400">
              <Calendar className="h-4 w-4 mr-2 text-cyber-accent" />
              <span>{duration}</span>
            </div>
            
            {grade && (
              <div className="flex items-center text-sm text-gray-400">
                <Award className="h-4 w-4 mr-2 text-cyber-accent" />
                <span>{grade}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {isActive && (
        <div className="mt-3 border-t border-cyber-light/30 pt-3">
          <span className="inline-flex items-center text-sm font-medium text-cyber-glow bg-cyber-glow/10 px-2 py-1 rounded">
            <span className="w-2 h-2 bg-cyber-glow rounded-full mr-2 animate-pulse"></span>
            Currently Pursuing
          </span>
        </div>
      )}
    </div>
  );
};

export default EducationCard;
