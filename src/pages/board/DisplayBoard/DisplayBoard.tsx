import {StyledWrapper} from './style';
import React, {useEffect, useState} from 'react';
import {DragDropContext, DropResult} from 'react-beautiful-dnd';
import {uniqueId} from 'lodash';
import {IcardProps, MOCK_DATA} from '../../../api/data';
import BoardColumn from '../components/BoardColumn';

const DisplayBoard: React.FC = () => {
	const [column, setColumn] = useState<any[]>(
			['done', 'planned', 'in-progress', 'open']);
	const [data, setData] = useState<IcardProps[]>([]);

	const onDragEnd = (result: DropResult) => {
		const {source, destination} = result;
		console.log(result);
		if (!destination) return;
		if (destination.droppableId === source.droppableId
				&& destination.index === source.index) return;

		const draggedItem: any = data.find(
				({id}) => id.toString() === result.draggableId);

		if (draggedItem.status) {
			draggedItem.status = result.destination?.droppableId;
		}

		const filteredMOCK_DATA = data.filter(item => item.id !== draggedItem.id);

		setData([...filteredMOCK_DATA, draggedItem]);
	};

	useEffect(() => {
		setData(MOCK_DATA);
	}, []);

	return (
			<DragDropContext onDragEnd={onDragEnd}>
				<StyledWrapper>
					{column.map(
							(name, index) => {

								return (
										<BoardColumn key={uniqueId(name)}
																 data={data}
																 columnName={name}/>
								);
							})}
				</StyledWrapper>
			</DragDropContext>
	);
};

export default React.memo(DisplayBoard);