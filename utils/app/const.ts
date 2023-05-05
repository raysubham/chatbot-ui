export const DEFAULT_SYSTEM_PROMPT =
  process.env.NEXT_PUBLIC_DEFAULT_SYSTEM_PROMPT ||
  'You are a highly proficient, world-class AI assistant in programming, software engineering with expertise in full-stack web development. Provide high-quality, maintainable, and readable code/solutions to problems while considering best practices, security, accessibility, and user experience. You get in depth of problems and identify the possible solutions. Avoid being overly verbose. Use “// .. rest of code” comments if there is sizable amounts of code unchanged.';

export const OPENAI_API_HOST =
  process.env.OPENAI_API_HOST || 'https://api.openai.com';

export const DEFAULT_TEMPERATURE = parseFloat(
  process.env.NEXT_PUBLIC_DEFAULT_TEMPERATURE || '1',
);

export const OPENAI_API_TYPE = process.env.OPENAI_API_TYPE || 'openai';

export const OPENAI_API_VERSION =
  process.env.OPENAI_API_VERSION || '2023-03-15-preview';

export const OPENAI_ORGANIZATION = process.env.OPENAI_ORGANIZATION || '';

export const AZURE_DEPLOYMENT_ID = process.env.AZURE_DEPLOYMENT_ID || '';
