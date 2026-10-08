export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  review: string;
  tag: string;
  verified: boolean;
}

export const reviewsData: ReviewItem[] = [
  {
    id: '1',
    author: 'Katherine M.',
    location: 'West University, Houston',
    rating: 5,
    date: '3 weeks ago',
    review: 'Village Cleaners has been my go-to dry cleaner in Rice Village for over 4 years. They handled my tailored designer blouses with such care and removed a stubborn red wine stain without fading the silk. Best service in Houston!',
    tag: 'Stain Removal & Delicates',
    verified: true
  },
  {
    id: '2',
    author: 'David L., MD',
    location: 'Texas Medical Center',
    rating: 5,
    date: '1 month ago',
    review: 'Working long shifts at the Med Center gives me zero time for laundry. Their Wash & Fold service is an absolute lifesaver. Everything comes back folded so sharply and smelling amazing. Attendant is always welcoming and courteous.',
    tag: 'Wash & Fold Laundry',
    verified: true
  },
  {
    id: '3',
    author: 'Julian Thorne',
    location: 'Southampton / Rice University',
    rating: 5,
    date: '2 months ago',
    review: 'Had three bespoke suits altered and pressed here before a wedding. The tailor is a true artist—the sleeve length and waist suppression were pinpoint perfection. Won’t take my suits anywhere else.',
    tag: 'Suit Alterations',
    verified: true
  },
  {
    id: '4',
    author: 'Sarah Jenkins',
    location: 'Rice Village Resident',
    rating: 5,
    date: '2 months ago',
    review: 'I love that they use modern Dexter commercial machines and the Dexter Pay app works seamlessly. Clean environment, safe parking right out front on Rice Blvd, and super fast turnarounds.',
    tag: 'Modern Equipment',
    verified: true
  },
  {
    id: '5',
    author: 'Marcus Vance',
    location: 'Southgate, Houston',
    rating: 4,
    date: '3 months ago',
    review: 'Drop off at 8:30 AM on Thursday and picked up Friday afternoon crisp and ready. High quality pressing on French cuff shirts with zero broken buttons. Truly dependable local business.',
    tag: 'Dress Shirts & Press',
    verified: true
  }
];
