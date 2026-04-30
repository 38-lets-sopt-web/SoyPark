import Button from "../button/Button";

const Header = ({ activeTab, onClick }) => {
return (
    <header className="flex items-center text-center gap-4 bg-blue-200 p-4 rounded-lg mb-4">
        <h1 className="font-bold">졸린 강아지를 터치해 깨워보세요!</h1>
        <div className="flex gap-1">
            <Button
                isActive={activeTab === 'game'}
                onClick={() => onClick('game')}
            >
                게임
            </Button>
            <Button
                isActive={activeTab === 'lanking'}
                onClick={() => onClick('lanking')}
            >
                랭킹
            </Button>
        </div>
    </header>
);
}

export default Header;