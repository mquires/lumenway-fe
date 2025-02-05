import { SERVER_URL } from '@/libs/constants/url.constants';
import type { CodegenConfig } from '@graphql-codegen/cli';
import 'dotenv/config';

const config: CodegenConfig = {
  schema: SERVER_URL,
  documents: ['./src/graphql/**/*.graphql'],
  generates: {
    './src/graphql/generated/output.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
  ignoreNoDocuments: true,
};

export default config;
