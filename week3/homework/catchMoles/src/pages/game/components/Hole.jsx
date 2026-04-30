import sleepyPuppy from "../../../shared/assets/sleepyPuppy.jpg";
import upsetPuppy from "../../../shared/assets/upsetPuppy.jpg";
import wakeupPuppy from "../../../shared/assets/wakeupPuppy.jpg";

const Hole = ({ status = "empty", onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="relative w-40 aspect-square bg-blue-200 rounded-full overflow-hidden cursor-pointer transition-transform active:scale-95 flex items-center justify-center"
    >
      {status === "sleepy" && (
        <img src={sleepyPuppy} alt="졸린 강아지" className="w-full h-full object-cover" />
      )}

      {status === "angry" && (
        <img src={upsetPuppy} alt="사나운 강아지" className="w-full h-full object-cover" />
      )}

      {status === "success" && (
        <img src={wakeupPuppy} alt="말똥말똥 강아지" className="w-full h-full object-cover" />
      )}
    </div>
  );
};

export default Hole;