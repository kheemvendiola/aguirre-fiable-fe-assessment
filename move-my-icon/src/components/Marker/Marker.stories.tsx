import type { Meta, StoryObj } from '@storybook/react';
import { Direction } from '../../enums/directions';
import Marker from './Marker';

const meta = {
  component: Marker,
} satisfies Meta<typeof Marker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: Direction.NORTH,
  },
};

export const SOUTH: Story = {
  args: {
    direction: Direction.SOUTH,
  },
};

export const WEST: Story = {
  args: {
    direction: Direction.WEST,
  },
};

export const EAST: Story = {
  args: {
    direction: Direction.EAST,
  },
};