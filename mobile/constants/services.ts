export type Service = {
  id: string;
  title: string;
  titleAr: string;
  icon: string;
  description: string;
  commission: string;
  color: string;
  providers: Provider[];
};

export type Provider = {
  name: string;
  logo: string;
  rating: number;
  tag: string;
  whatsapp: string;
};

export const SERVICES: Service[] = [
  {
    id: 'apartment',
    title: 'Find Apartment',
    titleAr: 'ابحث عن شقة',
    icon: '🏠',
    description: 'Browse verified properties in Dubai. Villas, apartments, compounds.',
    commission: 'Free',
    color: '#059669',
    providers: [
      { name: 'Dari Listings', logo: '🏠', rating: 4.9, tag: 'Best Match', whatsapp: '+971501234567' },
      { name: 'Bayut', logo: '🔑', rating: 4.7, tag: 'Popular', whatsapp: '+971501234568' },
    ],
  },
  {
    id: 'bank',
    title: 'Open Bank Account',
    titleAr: 'افتح حساباً بنكياً',
    icon: '🏦',
    description: 'Open a UAE bank account before you land. Works with your visa.',
    commission: '~500 AED referral',
    color: '#2563EB',
    providers: [
      { name: 'Emirates NBD', logo: '🏦', rating: 4.5, tag: 'Expat Friendly', whatsapp: '+971501234569' },
      { name: 'ADCB', logo: '🏛️', rating: 4.4, tag: 'Fast Approval', whatsapp: '+971501234570' },
      { name: 'Mashreq Neo', logo: '📱', rating: 4.6, tag: 'Digital Only', whatsapp: '+971501234571' },
    ],
  },
  {
    id: 'sim',
    title: 'Get a SIM Card',
    titleAr: 'احصل على شريحة',
    icon: '📱',
    description: 'UAE number with data plan ready when you land.',
    commission: '~100 AED referral',
    color: '#7C3AED',
    providers: [
      { name: 'du', logo: '📡', rating: 4.3, tag: 'Best Data', whatsapp: '+971501234572' },
      { name: 'Etisalat (e&)', logo: '📶', rating: 4.4, tag: 'Widest Coverage', whatsapp: '+971501234573' },
    ],
  },
  {
    id: 'car',
    title: 'Get a Car',
    titleAr: 'احصل على سيارة',
    icon: '🚗',
    description: 'Buy, lease or rent a car. We compare all options for you.',
    commission: '~2,000 AED referral',
    color: '#DC2626',
    providers: [
      { name: 'Al-Futtaim Toyota', logo: '🚗', rating: 4.6, tag: 'Most Popular', whatsapp: '+971501234574' },
      { name: 'Shift', logo: '🔄', rating: 4.5, tag: 'Used Cars', whatsapp: '+971501234575' },
      { name: 'Ekar', logo: '⚡', rating: 4.3, tag: 'Monthly Rental', whatsapp: '+971501234576' },
    ],
  },
  {
    id: 'school',
    title: 'Find School',
    titleAr: 'ابحث عن مدرسة',
    icon: '🏫',
    description: 'British, American, IB curriculum schools in Dubai with availability.',
    commission: '~1,000 AED referral',
    color: '#D97706',
    providers: [
      { name: 'GEMS Schools', logo: '🎓', rating: 4.7, tag: 'British Curriculum', whatsapp: '+971501234577' },
      { name: 'Repton Dubai', logo: '📚', rating: 4.8, tag: 'Premium', whatsapp: '+971501234578' },
      { name: 'Dubai International', logo: '🌍', rating: 4.5, tag: 'IB Curriculum', whatsapp: '+971501234579' },
    ],
  },
  {
    id: 'insurance',
    title: 'Health Insurance',
    titleAr: 'تأمين صحي',
    icon: '🏥',
    description: 'Mandatory in Dubai. We find the best plan for your family.',
    commission: '~800 AED referral',
    color: '#0891B2',
    providers: [
      { name: 'Daman', logo: '🏥', rating: 4.5, tag: 'Most Accepted', whatsapp: '+971501234580' },
      { name: 'AXA Gulf', logo: '🛡️', rating: 4.4, tag: 'Best Coverage', whatsapp: '+971501234581' },
      { name: 'Cigna', logo: '❤️', rating: 4.6, tag: 'International', whatsapp: '+971501234582' },
    ],
  },
  {
    id: 'helper',
    title: 'Domestic Helper',
    titleAr: 'مساعد منزلي',
    icon: '👩‍🍳',
    description: 'Find a verified maid, nanny or driver. Background checked.',
    commission: '~1,500 AED referral',
    color: '#BE185D',
    providers: [
      { name: 'HelperChoice', logo: '🤝', rating: 4.4, tag: 'Verified', whatsapp: '+971501234583' },
      { name: 'Maid in UAE', logo: '✨', rating: 4.3, tag: 'Fast Hire', whatsapp: '+971501234584' },
    ],
  },
  {
    id: 'visa',
    title: 'Visa & PRO Help',
    titleAr: 'تأشيرة ومساعدة PRO',
    icon: '📋',
    description: 'Residency visa, Emirates ID, typing services — all handled.',
    commission: '~600 AED referral',
    color: '#4338CA',
    providers: [
      { name: 'PRO UAE', logo: '📋', rating: 4.6, tag: 'Fast & Reliable', whatsapp: '+971501234585' },
      { name: 'Visa Express', logo: '✈️', rating: 4.4, tag: 'Budget Friendly', whatsapp: '+971501234586' },
    ],
  },
];
