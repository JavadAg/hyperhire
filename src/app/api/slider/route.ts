export async function GET() {
  const sliderMockData = [
    {
      id: 1,
      image: 'slider/marketing.svg',
      title: '해외 마케팅',
    },
    {
      id: 2,
      image: 'slider/image.svg',
      title: '퍼블리셔',
    },
    {
      id: 3,
      image: 'slider/box.svg',
      title: '캐드원(제도사)',
    },
    {
      id: 4,
      image: 'slider/target.svg',
      title: '해외 세일즈',
    },
    {
      id: 5,
      image: 'slider/call.svg',
      title: '해외 CS',
    },
  ];

  return Response.json(sliderMockData);
}
