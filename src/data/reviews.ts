export interface Review {
  id: string;
  studentName: string;
  course: string;
  rating: number;
  reviewText: string;
  date: string;
  source: string;
  truncated: boolean;
  featured: boolean;
}

export interface ReviewsAggregate {
  overallRating: number;
  maxRating: number;
  totalReviewsReported: number;
  sourceName: string;
  sourceNote: string;
}

export const REVIEWS_AGGREGATE: ReviewsAggregate = {
  overallRating: 5.0,
  maxRating: 5,
  totalReviewsReported: 120,
  sourceName: "UrbanPro",
  sourceNote: "Overall rating and total review count as displayed on UrbanPro.",
};

export const REVIEWS: Review[] = [
  {
    id: "rev-01",
    studentName: "Gurdeep Singh",
    course: "Cyber Security",
    rating: 5,
    date: "14 February 2026",
    source: "UrbanPro",
    truncated: true,
    featured: true,
    reviewText:
      "My training experience was very good. He makes us involved in activities, which helps us understand concepts better. He focuses more on practical learning rather than only theoretical teaching, which makes learning more interesting and useful. He also provides notes for every topic, which helps a lot in revision and understanding. He is very friendly and approachable, and he always resolves every doubt effectively and patiently. Overall, I had a great learning experien...",
  },
  {
    id: "rev-02",
    studentName: "Kaushik Chaudhary",
    course: "512200_Cybersecurity - SOC Analyst",
    rating: 5,
    date: "14 February 2026",
    source: "UrbanPro",
    truncated: false,
    featured: true,
    reviewText:
      "It was amazing, truly meaningful and inspiring. Your guidance and real-world examples to understand the concept were great.",
  },
  {
    id: "rev-03",
    studentName: "Sudipt",
    course: "512200_Cybersecurity - SOC Analyst",
    rating: 5,
    date: "14 February 2026",
    source: "UrbanPro",
    truncated: false,
    featured: true,
    reviewText:
      "The overall journey from day 1 to last day was so much enjoyable throughout the training. The best mentor for teaching ever I had.",
  },
];

export function getFeaturedReviews(): Review[] {
  return REVIEWS.filter((rev) => rev.featured);
}
