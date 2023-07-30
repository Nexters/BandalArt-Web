export type Colors = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  theme1: string;
  theme2: string;
  theme3: string;
  theme4: string;
  theme5: string;
  theme6: string;
  'theme-sub': string;
  'theme-sub2': string;
};

type ThemeType = Record<'light', { colors: Colors }>;
export const defaultTheme: ThemeType = {
  light: {
    colors: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      theme1: '#3fffba',
      theme2: '#4e3fff',
      theme3: '#3ff3ff',
      theme4: '#93ff3f',
      theme5: '#fbff3f',
      theme6: '#ffb423',
      'theme-sub': '#111827',
      'theme-sub2': '#b5aeff',
    },
  },
};

const themeToCssVar = (theme: ThemeType) => {
  const cssVars = Object.keys(theme).map((themeKey) =>
    Object.entries(theme[themeKey as keyof ThemeType].colors).map(
      ([key, value]) => {
        return [`--color-${key}`, value];
      },
    ),
  );
  return cssVars
    .map((vars, idx) => {
      const themeKey = Object.keys(theme)[idx];
      return `&.theme-${themeKey} {${vars
        .map(([key, value]) => `${key}: ${value};`)
        .join('')}}`;
    })
    .join('');
};

export const theme = themeToCssVar(defaultTheme);
