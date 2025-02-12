import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { featured } from '../constants';
import { themeColors } from '../theme';
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";

export default function CartScreen() {
    const navigation = useNavigation();
    const restaurant = featured.restaurants[0];

    return (
        <Modal isVisible={true} style={{ margin: 0 }}>
            <View className="bg-white flex-1">
                {/* Back Button */}
                <View className="relative py-4 shadow-sm">
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ backgroundColor: themeColors.bgColor(1) }}
                        className="absolute z-10 rounded-full p-1 shadow top-5 left-2">
                        <Icon.ArrowLeft strokeWidth={3} stroke="white" />
                    </TouchableOpacity>
                    <View>
                        <Text className="text-center font-bold text-xl">Your Cart</Text>
                        <Text className="text-center text-gray-500">{restaurant.name}</Text>
                    </View>
                </View>

                {/* Delivery Time */}
                <View style={{ backgroundColor: themeColors.bgColor(0.2) }}
                    className="flex-row px-4 items-center"
                >
                    <Image source={require('../assets/images/bikeGuy.png')} className="w-20 h-20 rounded-full" />
                    <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
                    <TouchableOpacity>
                        <Text className="font-bold" style={{ color: themeColors.text }}>Change</Text>
                    </TouchableOpacity>
                </View>

                {/* Dishes */}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 50
                    }}
                    className="bg-white pt-5"
                >
                    {restaurant.dishes.map((dish, index) => (
                        <View key={index}
                            className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md">
                            <Text className="font-bold" style={{ color: themeColors.text }}>2 x</Text>
                            <Image className="h-14 w-14 rounded-full" source={dish.image} />
                            <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
                            <Text className="font-semibold text-base">Rs. {dish.price}</Text>
                            <TouchableOpacity
                                className="p-1 rounded-full"
                                style={{ backgroundColor: themeColors.bgColor(1) }}
                            >
                                <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white" />
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>

                {/* Totals */}
                <View className="p-6 px-8 rounded-t-3xl space-y-4" style={{ backgroundColor: themeColors.bgColor(0.2) }}>
                    <View className="flex-row justify-between">
                        <Text className="text-gray-700">Subtotal</Text>
                        <Text className="text-gray-700">Rs. 2200</Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-gray-700">Delivery Fee</Text>
                        <Text className="text-gray-700">Rs. 100</Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-gray-700 font-extrabold">Order Total</Text>
                        <Text className="text-gray-700 font-extrabold">Rs. 2300</Text>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Place Order')}
                            style={{ backgroundColor: themeColors.bgColor(2) }}
                            className="p-3 rounded-full"
                        >
                            <Text className="text-white text-center font-bold text-lg">Place Order</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}