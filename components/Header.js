import HeaderItem from './HeaderItem';
import {
	HomeIcon,
	LightningBoltIcon,
	BadgeCheckIcon,
	CollectionIcon,
	SearchIcon,
	UserIcon,
} from '@heroicons/react/outline';

const HeaderItems = [
	{ title: 'HOME', Icon: HomeIcon },
	{ title: 'TRENDING', Icon: LightningBoltIcon },
	{ title: 'VERIFIED', Icon: BadgeCheckIcon },
	{ title: 'COLLECTIONS', Icon: CollectionIcon },
	{ title: 'SEARCH', Icon: SearchIcon },
	{ title: 'ACCOUNT', Icon: UserIcon },
];

function Header() {
	return (
		<header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
			<div className='flex flex-grow justify-evenly max-w-2xl'>
				{HeaderItems.map(({ title, Icon }, index) => (
					<HeaderItem key={index} title={title} v Icon={Icon} />
				))}
			</div>
			<h1 className='text-5xl tracking-widest font-black'>Hulu</h1>
		</header>
	);
}

export default Header;
