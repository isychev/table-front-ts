module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/setupEnzyme.tsx'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'src/constants*',
    'src/types*',
    'src/*.d.ts',
    'setupEnzyme.tsx',
  ],
  collectCoverageFrom: ['src/*.tsx', 'src/*.ts'],
};
