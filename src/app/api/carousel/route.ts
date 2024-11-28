export async function GET() {
  const carouselMockData = Array.from({ length: 5 }).map((_, index) => {
    return {
      id: index,
      name: `Abhishek Gupta`,
      role: '마케팅',
      experience: '2y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      profile_picture: '/carousel/carousel-card-profile.png',
      flag: '/carousel/carousel-card-flag.jpg',
    };
  });

  return Response.json(carouselMockData);
}
