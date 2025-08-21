import { useTranslation } from 'react-i18next'
import { Languages } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
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
        className="h-9 w-[92px] rounded-md px-3 text-sm border border-primary/20 bg-background/5 text-foreground hover:bg-primary/10 hover:border-primary/40 backdrop-blur-sm transition-colors"
      >
        <div className="flex items-center gap-2">
          <Languages className="h-4 w-4 opacity-70" aria-hidden="true" />
          <SelectValue placeholder="EN" />
        </div>
      </SelectTrigger>
      <SelectContent align="end">
        <SelectItem value="en">English (EN)</SelectItem>
        <SelectItem value="es">Español (ES)</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default LanguageSwitcher


