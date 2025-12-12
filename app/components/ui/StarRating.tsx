// StarRatingRounded.tsx
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  starSize?: number;
  color?: string;
  emptyColor?: string;
  onChange?: (rating: number) => void;
  readonly?: boolean;
  enableHalfStar?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxStars = 5,
  starSize = 30,
  color = '#FFD700',
  emptyColor = '#CCCCCC',
  onChange,
  readonly = false,
  enableHalfStar = false,
}) => {
  const softRoundedTipsStar = `
    M50,12 
    L57,33 
    Q60,37 72,37 
    L63,48 
    Q66,54 68,66 
    L50,57 
    L32,66 
    Q34,54 37,48 
    L28,37 
    Q40,37 43,33 
    L50,12 
    Z
  `;

  // Еще более мягкая звезда
  const softStarPoints = `
    M50,12 
    L58,32 
    L80,35 
    L63,48 
    L69,70 
    L50,58 
    L31,70 
    L37,48 
    L20,35 
    L42,32 
    Z
  `;

  const renderStar = (index: number) => {
    const filled = rating >= index + 1;
    const halfStar = enableHalfStar && rating > index && rating < index + 1;

    return (
      <Svg height={starSize} width={starSize} viewBox="0 0 100 100">
        <Path
          d={softStarPoints} // Используем мягкую звезду
          fill={filled ? color : halfStar ? color : emptyColor}
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round" // Закругляем стыки линий
          strokeLinecap="round" // Закругляем концы линий
        />
        {halfStar && (
          <Path
            d="M50,12 L50,58 L31,70 L37,48 L20,35 L42,32 L50,12"
            fill={color}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        )}
      </Svg>
    );
  };

  const handlePress = (index: number) => {
    if (readonly || !onChange) return;
    const newRating = index + 1;
    onChange(newRating);
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: maxStars }).map((_, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(index)}
          disabled={readonly || !onChange}
          activeOpacity={0.7}
          style={styles.starButton}
        >
          {renderStar(index)}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starButton: {
    marginHorizontal:-2,
  },
});

export default StarRating;