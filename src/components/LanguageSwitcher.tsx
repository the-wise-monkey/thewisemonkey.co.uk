import { useTranslation } from 'react-i18next'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const currentLanguage = (i18n.resolvedLanguage || i18n.language || 'en').split('-')[0]

  const handleChange = (value: string) => {
    void i18n.changeLanguage(value)
  }

  return (
    <Select value={currentLanguage} onValueChange={handleChange}>
      <SelectTrigger
        aria-label="Language selector"
        className="h-9 w-[64px] rounded-md px-2 text-sm border border-primary/20 bg-background/5 text-foreground hover:bg-primary/10 hover:border-primary/40 backdrop-blur-sm transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <span className="text-lg leading-none" role="img" aria-label={currentLanguage === 'es' ? 'Español' : 'English'}>
            {currentLanguage === 'es' ? '🇪🇸' : '🇬🇧'}
          </span>
        </div>
      </SelectTrigger>
      <SelectContent align="end">
        <SelectItem value="en">
          <span className="mr-2 text-lg" role="img" aria-hidden="true">🇬🇧</span>
          English
        </SelectItem>
        <SelectItem value="es">
          <span className="mr-2 text-lg" role="img" aria-hidden="true">🇪🇸</span>
          Español
        </SelectItem>
      </SelectContent>
    </Select>
  )
}

export default LanguageSwitcher


