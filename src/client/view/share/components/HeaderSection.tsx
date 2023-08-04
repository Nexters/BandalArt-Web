import React, { CSSProperties } from 'react';
import { css, cx } from '@linaria/core';
import { BandalartDetail } from '../../../../types/BandalartDetail';
import dayjs from 'dayjs';

type HeaderSectionProps = {
  detail: BandalartDetail;
  completionRatio: number;
};

export const HeaderSection = ({
  detail,
  completionRatio,
}: HeaderSectionProps) => {
  const formattedDueDate = detail.dueDate
    ? dayjs(detail.dueDate).format('YY년 MM월 DD일')
    : null;

  return (
    <section className={container}>
      {detail.profileEmoji && (
        <div className={emojiBox}>{detail.profileEmoji}</div>
      )}
      <h1 className={title}>{detail.title}</h1>
      <div className={progressInfoContainer}>
        <span className={subtext}>달성률 ({completionRatio}%)</span>
        {detail.dueDate && (
          <span className={cx(subtext, dueDate)}>~{formattedDueDate}</span>
        )}
      </div>
      <div
        className={progressContainer}
        style={{ '--progress-ratio': completionRatio } as CSSProperties}
      >
        <progress value={completionRatio} aria-label="반다라트 달성률" />
      </div>
    </section>
  );
};

const container = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const emojiBox = css`
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background-color: var(--color-100);
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 1px 1px rgba(17, 24, 39, 0.1));
  margin-bottom: 16px;
`;

const title = css`
  color: var(--color-900);
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 26px;
`;

const subtext = css`
  color: var(--color-600);
  font-size: 12px;
  font-weight: 500;
`;

const dueDate = css`
  &::before {
    color: var(--color-300);
    content: '|';
    margin: 0 6px;
  }
`;

const progressInfoContainer = css`
  width: 100%;
`;

const progressContainer = css`
  margin-top: 8px;
  position: relative;
  width: 100%;
  height: 8px;
  border-radius: 5px;
  background-color: var(--color-100);

  @keyframes progress {
    from {
      width: 0;
    }
    to {
      width: calc(var(--progress-ratio) * 1%);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: calc(var(--progress-ratio) * 1%);
    height: 100%;
    border-radius: 5px;
    background: var(--main-color);
    animation: progress 0.8s ease-in-out;
  }

  progress {
    opacity: 0;
  }
`;
