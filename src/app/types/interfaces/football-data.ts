export interface League {
  id: number;
  sport_id: number;
  country_id: number;
  name: string;
  active: boolean;
  short_code: string;
  image_path: string;
  type: string;
  sub_type: string;
  last_played_at: string;
  category: number;
  has_jerseys: boolean;
}

export interface allLeaguesResponse {
  data: League[];
  pagination: {
    count: number;
    per_page: number;
    current_page: number;
    next_page: any;
    has_more: boolean;
  };
}
