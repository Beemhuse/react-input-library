const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const rollup = require('gulp-rollup');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const babel = require('@rollup/plugin-babel').default;
const typescript = require('@rollup/plugin-typescript');
const terser = require('@rollup/plugin-terser');
const jest = require('jest');

// Load the TypeScript configuration
const tsProject = ts.createProject('tsconfig.json');

// Task to compile TypeScript files
gulp.task('typescript', function () {
  return tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

// Task to bundle files using Rollup
gulp.task('bundle', function () {
  return gulp.src('dist/**/*.js')
    .pipe(rollup({
      input: 'dist/main.js',
      plugins: [
        nodeResolve(),
        commonjs(),
        babel({ babelHelpers: 'bundled' }),
        typescript(),
        terser(),
      ],
      output: {
        format: 'cjs',
        sourcemap: true,
      },
    }))
    .pipe(gulp.dest('build'));
});

// Task to run Jest tests
gulp.task('test', function (done) {
  jest.runCLI({}, ['.']).then(() => done());
});

// Watch task to monitor changes in TypeScript files
gulp.task('watch', function () {
  gulp.watch('src/**/*.ts', gulp.series('typescript', 'bundle', 'test'));
});

// Default task
gulp.task('default', gulp.series('typescript', 'bundle', 'test'));
