/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from "react"
import { Container } from "../../components/Container/Container"
import Image from "next/image"
import { theme } from "../../theme"
import { Block, BlockFields } from "../../components/Block/Block"
import { Button } from "../../components/Button/Button"

const gap = 4
export interface GalleryProps extends BlockFields {
  images: string[]
  button: {
    label: string
    link: string
  }
}

export const Gallery: React.FC<GalleryProps> = ({ id, images, button }) => (
  <Block id={id}>
    <Container
      css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      `}
    >
      {images.map((_, i) => (
        <figure
          key={1}
          css={css`
            box-sizing: border-box;
            text-align: center;
            width: calc(100% - ${gap * 2}px);
            margin: ${gap}px 0;

            @media (min-width: 500px) {
              width: calc(100% / 2 - ${gap * 2}px);
            }

            @media (min-width: 700px) {
              width: calc(100% / 3 - ${gap * 2}px);
            }
          `}
        >
          <Image
            src="/images/${image}.webp"
            alt={`Fotka ${i}`}
            width={theme.layout.width / 3}
            height={(theme.layout.width / 3) * 0.7}
            lazyBoundary="600px"
            css={css`
              background-color: ${theme.color.brand};
            `}
            objectFit="cover"
            objectPosition="center"
          />
        </figure>
      ))}
      <div
        css={css`
          margin: 0 auto;
        `}
      >
        <Button link={button.link} targetBlank>
          {button.label}
        </Button>
      </div>
    </Container>
  </Block>
)
