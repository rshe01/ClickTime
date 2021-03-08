import * as React from 'react';
import styles from '@styles/components/load.module.scss';
import { CTText } from '@components-js/CTText';
import { CTSelect } from '@components-js/CTSelect';
import { CTInput } from '@components-js/CTInput';
import { CTButton } from '@components-js/CTButton';

export const Phrase = ({ categories, phrase, onLoadGame}) => {
    const [newPhrase, setNewPhrase] = React.useState(phrase ?? '');
	React.useEffect(() => setNewPhrase(phrase ?? ''), [phrase]);

    const [categoryID, setCategoryID] = React.useState(undefined);
	return (
		<div className={styles.container}>
			<div className={styles.username}>
				<CTText value="New Phrase" />
				<CTInput onChange={setNewPhrase} placeholder="Enter a phrase..." value={newPhrase} />
			</div>
            <div className={styles.selections}>
				<div className={styles.selection}>
					<CTText value="Category" />
					<CTSelect onChange={(value) => setCategoryID(Number(value))}>
						<option value={categoryID}>Select a Category</option>
						{categories.map((category) => (
							<option key={category.id} value={category.id}>
								{category.name}
							</option>
						))}
					</CTSelect>
				</div>
			</div>
			<CTButton
				isDisabled={newPhrase === '' || categoryID === undefined}
				onClick={() => onLoadGame({ categoryID, newPhrase })}
				value="Generate Phrase"
			/>
		</div>
	);
};
