import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default ({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()));
  return defineConfig({
    build: {
      outDir: '../main/resources/static',
      emptyOutDir: true,
    },
    plugins: [react()],
  });
};
