import React from "react";

import Button from "./Button";

import { Card, PlayerHand } from "../Styles/Styled";

const Player = ({ name, removePlayer, index}) => (
	<article>
		<p>
			{name} {index}
			<Button icon="✏️">Edit</Button>
			<Button
				icon="🔥"
				onClick={() => removePlayer(index)}
			>Remove</Button>
		</p>
		<PlayerHand>
				<Card suit="D" value="A" selected={true}>
					A
				</Card>
				<Card suit="D" value="K">
					K
				</Card>
				<Card suit="D" value="Q">
					Q
				</Card>
				<Card suit="D" value="J">
					J
				</Card>
				<Card suit="D" value="T">
					T
				</Card>
		</PlayerHand>
	</article>
);

export default Player;
