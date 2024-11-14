'use client';

import { motion } from 'framer-motion';
import Card from '../ui/Card';

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  
  // ... другие навыки
];

const SkillsCard = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <h2 className="text-2xl font-bold mb-4">Навыки</h2>
      <div className="space-y-3">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-1">
            <div className="flex justify-between">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <motion.div 
              className="h-2 bg-secondary/30 rounded-full overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SkillsCard;
