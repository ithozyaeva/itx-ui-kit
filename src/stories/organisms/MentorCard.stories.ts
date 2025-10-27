import { MentorCard as MentorCardComponent } from '@/components';

export default {
  title: 'Organisms/MentorCard',
  component: MentorCardComponent,
};

export const MentorCard = (args: any) => ({
  components: { MentorCardComponent },
  setup() {
    return { args };
  },
  template: '<MentorCardComponent v-bind="args" />',
});

MentorCard.args = {
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  name: 'John Doe',
  position: 'Fullstack Developer, NameCO',
  company: 'NameCO',
  labels: [
    'Frontend',
    'Backend',
    'Node.js',
    'TypeScript',
    'Web3',
    'Rust',
    'Fastify',
    'Angular',
    'Vue',
    'React',
  ],

  description:
    'Долго проработал Frontend разработчиком и тимлидом, руководил Node.js направлением. Также автор курса по TypeScript на code-basics.com, был одним из первых наставников на Хекслете и занимаюсь консалтингом, менторством уже 5+ лет.',
  link: '/mentors/john-doe',
};
