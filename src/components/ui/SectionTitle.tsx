import { useTheme } from '../../context/ThemeContext';

interface Props {
  title: string;
  subtitle?: string;
  id: string;
}

export default function SectionTitle({ title, subtitle, id }: Props) {
  const { theme } = useTheme();

  return (
    <div className="text-center mb-16" id={id}>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-surface-900 dark:text-white' : 'text-surface-950'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-surface-700 dark:text-surface-200' : 'text-surface-900'}`}>
          {subtitle}
        </p>
      )}
      <div className="mt-6 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
    </div>
  );
}
