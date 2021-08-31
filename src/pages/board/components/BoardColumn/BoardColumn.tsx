import React, {useEffect, useState} from 'react';
import {
	StyledColumnName,
	StyledColumnWrapper,
} from './styledColumn';
import {Card} from '../Card/Card';
import {Droppable} from 'react-beautiful-dnd';
import {IcardProps} from '../../../../api/data';
import {uniqueId} from 'lodash';

interface IBoardProps {
	columnName: string;
	data: IcardProps[];
}

const BoardColumn: React.FC<IBoardProps> = ({columnName, data}) => {
	const [cards, setCards] = useState<IcardProps[]>([]);

	useEffect(() => {
		const filteredData = data.filter(({status}) => status === columnName).sort((a: any, b: any) => {
			return a.priority.split('')[1] - b.priority.split('')[1];
		});
		setCards(filteredData);
	}, []);


	return (
			<Droppable droppableId={columnName}>
				{
					(provided, spanshot) => (

							<StyledColumnWrapper
									ref={provided.innerRef}
									{...provided.droppableProps}>
								<StyledColumnName>
									<h2>{columnName.toUpperCase()}</h2>
								</StyledColumnName>
								{cards.map((item, i) => <Card key={uniqueId(item.id)} {...item}
																							index={i}/>)
								}
								{provided.placeholder}
							</StyledColumnWrapper>

					)}
			</Droppable>
	);
};

export default React.memo(BoardColumn);