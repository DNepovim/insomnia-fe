import { css } from "@emotion/react"
import React from "react"
import { Container } from "../../components/Container/Container"
import { ResponsiveVideo, ResponsiveVideoProps } from "../../components/ResponsiveVideo/ResponsiveVideo"

export const Video: React.FC<{video: ResponsiveVideoProps}> = (props) => (
	<Container>
		<ResponsiveVideo {...props.video} />
	</Container>
)