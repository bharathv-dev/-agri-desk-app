import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
    return (
        <>
            <StatusBar style="light" />
            <Stack
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#2D7A3E',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                <Stack.Screen
                    name="index"
                    options={{
                        title: 'AGRI DESK',
                        headerShown: true,
                    }}
                />
                <Stack.Screen
                    name="soil-types"
                    options={{
                        title: 'Soil Types',
                    }}
                />
                <Stack.Screen
                    name="climate-zones"
                    options={{
                        title: 'Agro Climatic Zones',
                    }}
                />
                <Stack.Screen
                    name="crop-classification"
                    options={{
                        title: 'Classification of Crops',
                    }}
                />
                <Stack.Screen
                    name="crop-seasons"
                    options={{
                        title: 'Crop Seasons',
                    }}
                />
                <Stack.Screen
                    name="crop-requirements"
                    options={{
                        title: 'Crop Requirements',
                    }}
                />
                <Stack.Screen
                    name="crop-pests"
                    options={{
                        title: 'Major Crop Pests',
                    }}
                />
            </Stack>
        </>
    );
}
