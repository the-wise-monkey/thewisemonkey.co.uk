import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value.toLowerCase().slice(0, 2);
    void i18n.changeLanguage(value);
  };

  return (
    <select
      aria-label="Language selector"
      value={i18n.resolvedLanguage}
      onChange={handleChange}
      className="bg-background text-foreground border border-border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <option value="en">EN</option>
      <option value="es">ES</option>
    </select>
  );
};

export default LanguageSwitcher;


