import {Image, Text, View, StyleSheet} from 'react-native'



const Card = ({product}) => {
  return (
    <View style={styles.card}>
        <View style={styles.photo}>
            <Image
                style={styles.photoImg}
                source={product.photo}
            />
        </View>
        <View>
            
            <Text style={styles.nome}> {product.nome}</Text>
        </View>

        <View>
            
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        width: 150,
        height: 180,
        backgroundColor: '#808080',
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 10
    },
    photo: {
        marginHorizontal: 5,
        marginTop: 5
        
    },
    photoImg: {
        width: 100,
        height: 140,
    },
    nome: {
        marginTop: 4
    }
})

export default Card