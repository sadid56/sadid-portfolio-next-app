const cache = new Map<string, any[]>();
import skillsArray from "../../../../public/skills.json";

export const getFilteredSkills = (skill: string) => {
  if (cache.has(skill)) return cache.get(skill)!;

  const result = skillsArray.filter((item) => item.category === skill);
  cache.set(skill, result);
  return result;
};
