import skills from "@/data/skills";

const cache = new Map<string, any[]>();

export const getFilteredSkills = (skill: string) => {
  if (cache.has(skill)) return cache.get(skill)!;

  const result = skills.filter((item) => item.category === skill);
  cache.set(skill, result);
  return result;
};
