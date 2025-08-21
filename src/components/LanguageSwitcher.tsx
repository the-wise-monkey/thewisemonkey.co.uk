import { useTranslation } from 'react-i18next'
import { ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const currentLanguage = (i18n.resolvedLanguage || i18n.language || 'en').split('-')[0]

  const handleChange = (value: string) => {
    void i18n.changeLanguage(value)
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          aria-label="Language selector"
          className="h-9 w-[80px] rounded-md px-2 text-sm border border-primary/20 bg-background/5 text-foreground hover:bg-primary/10 hover:border-primary/40 backdrop-blur-sm transition-colors cursor-pointer inline-flex items-center justify-between gap-2"
        >
          <span className="inline-flex items-center justify-center">
            {currentLanguage === 'es' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="14"
                viewBox="0 0 3 2"
                aria-label="Español"
              >
                <rect width="3" height="2" fill="#c60b1e" />
                <rect y="0.5" width="3" height="1" fill="#ffc400" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="14"
                viewBox="0 0 60 30"
                aria-label="English"
              >
                <clipPath id="t">
                  <path d="M0,0 v30 h60 v-30 z" />
                </clipPath>
                <clipPath id="s">
                  <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
                </clipPath>
                <g clipPath="url(#t)">
                  <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                  <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                  <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath="url(#s)" />
                  <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                  <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
                </g>
              </svg>
            )}
          </span>
          <ChevronDown className="h-4 w-4 opacity-70" aria-hidden="true" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={6}>
        <DropdownMenuItem onSelect={() => handleChange('en')}>
          <span className="mr-2 inline-flex items-center" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 60 30">
              <clipPath id="t2"><path d="M0,0 v30 h60 v-30 z" /></clipPath>
              <clipPath id="s2"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" /></clipPath>
              <g clipPath="url(#t2)">
                <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath="url(#s2)" />
                <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
                <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
              </g>
            </svg>
          </span>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => handleChange('es')}>
          <span className="mr-2 inline-flex items-center" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 3 2">
              <rect width="3" height="2" fill="#c60b1e" />
              <rect y="0.5" width="3" height="1" fill="#ffc400" />
            </svg>
          </span>
          Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageSwitcher


