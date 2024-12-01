import { NAVTEXT } from "../Data";

const CurvedText = ({header}) => {
    return (
      
        <svg
        viewBox="0 0 100 50"
        xmlns="http://www.w3.org/2000/svg"
        className="w-32 h-10"
      >
        {/* Define a smaller U-shaped path */}
        <path
          d="M 10 50 Q 50 0 90 50"
          id="smallUShapePath"
          fill="transparent"
        />

        {/* Text on the path */}
        <text
          fill="white"
          fontSize="15"
          fontWeight="bold"
          className="tracking-wide"
        >
          <textPath
            href="#smallUShapePath"
            startOffset="50%"
            textAnchor="middle"
          >
            {header}
          </textPath>
        </text>
      </svg>
    );
  };
  
  export default CurvedText;
  