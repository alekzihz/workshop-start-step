import client from '#lib/client.ts';
import type { Experience, ExperienceSection } from './experience-collection.model';

export const getExperience = async () =>
  await client.getContent<ExperienceSection>({
    contentType: 'ExperienceSection',
    includeRelatedContent: true,
  });
