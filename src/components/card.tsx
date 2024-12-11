
interface CardProps {  
    ind: number;
    name: string;
    userId: string;



}


interface Colors {  
    [key: number]: string;
}

const Card: React.FC<CardProps> = ({ ind, name, userId }) => {

    const colors:Colors ={

        1: '#fc374e',
        2: '#36aeb3',
        3: '#162d59',
        4: '#f15f0e',
       
    }

    const getColor = (index: number): string => {
 
        const adjustedIndex = (index - 1) % 4 + 1; 
        return colors[adjustedIndex];
    };
    


    return (
        <li style={{ "--cardColor": getColor(ind) } as React.CSSProperties} className="card">

           <div className="content">
				<div className="icon">🥳</div>
				<div className="title">{name}</div>
				<div className="text">
                    No. de socio {userId}.</div>
			</div>
        </li>
    );
};

export default Card;
