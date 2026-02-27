interface Props {
  title: string;
  subtitle?: string;
  id: string;
}

export default function SectionTitle({ title, subtitle, id }: Props) {
  return (
    <div className="text-center mb-16" id={id}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-surface-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-surface-700 dark:text-surface-200 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-6 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
    </div>
  );
}
