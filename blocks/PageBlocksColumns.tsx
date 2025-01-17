/** @jsxImportSource @emotion/react */
import React from "react"
import { css } from "@emotion/react"
import { theme } from "../theme"
import { Container } from "../components/Container/Container"
import { Column } from "../components/Column/Column"
import { Heading } from "../components/Heading/Heading"
import { Block } from "../components/Block/Block"
import { PageBlocksColumns } from "../tina/__generated__/types"

const Columns: React.FC<PageBlocksColumns> = ({ id, title, columns }) => (
  <Block id={id} withBackground>
    <Container>
      {title && <Heading level={2}>{title}</Heading>}
      <div
        css={css`
          margin: 0 -16px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        `}
      >
        {columns?.map((column, i) => (
          <div
            key={i}
            css={css`
              width: ${theme.layout.width / 3 - 8}px;
              padding: 4px 16px;
              box-sizing: border-box;
              margin-bottom: 16px;
            `}
          >
            {column && <Column {...column} />}
          </div>
        ))}
      </div>
    </Container>
  </Block>
)

export default Columns
