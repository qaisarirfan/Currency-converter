module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  setupFiles: ['<rootDir>/jest/setup.js'],
  modulePathIgnorePatterns: ['<rootDir>/scripts/'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/assetsTransformer.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-vector-icons)/)',
  ],
  testEnvironment: 'node',
  cache: false,
};
