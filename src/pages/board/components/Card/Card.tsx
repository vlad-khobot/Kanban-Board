import {CardWrapper, StyledContentCard} from './cardStyle';
import React from 'react';
import {Draggable} from 'react-beautiful-dnd';
import {IcardProps} from '../../../../api/data';

export const Card: React.FC<IcardProps> = (props) => {
	const {id, title, description, status, priority, index} = props;
	return (
			<Draggable draggableId={id.toString()} index={index}>

				{
					(provided , snapshot) => (
							<CardWrapper
									className={`${snapshot.isDragging ? 'dragActive' : null}`}
									{...provided.draggableProps}
									{...provided.dragHandleProps}
									ref={provided.innerRef}
							>

								<StyledContentCard>
									<h3>{title}</h3>
								</StyledContentCard>

								<StyledContentCard>
									<p>{description}</p>
								</StyledContentCard>

								<StyledContentCard>
									<p>Status : {status}</p>
								</StyledContentCard>

								<StyledContentCard>
									<p>{priority}</p>
								</StyledContentCard>

							</CardWrapper>
					)
				}

			</Draggable>
	);
};