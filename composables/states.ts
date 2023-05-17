// check storage for dark mode preference

export const useTheme = () => useState('theme', () => {
  return 'light';
});
