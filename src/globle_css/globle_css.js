import { StyleSheet } from 'react-native';

export const globleStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 60,
    },
    iconContainer: {
        marginBottom: 40,
    },
    iconBackground: {
        width: 180,
        height: 180,
        borderRadius: 90,
        backgroundColor: '#F3F4F6',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 5,
    },
    title: {
        fontSize: 48,
        fontWeight: '700',
        color: '#371f25',
        marginBottom: 20,
        letterSpacing: -0.5,
        fontFamily:'Popins-Regular'
    },
    subtitle: {
        fontSize: 16,
        color: '#6B7280',
        lineHeight: 24,
        fontFamily:'Nunito-Medium',
        fontWeight:'500'
    },
    spacer: {
        flex: 1,
    },
    primaryButton: {
        backgroundColor: '#2563EB',
        paddingVertical: 18,
        paddingHorizontal: 40,
        borderRadius: 12,
        width: '100%',
        maxWidth: 340,
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: '#2563EB',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
    primaryButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Raleway-Medium'
    },
    secondaryButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        marginBottom: 30,
    },
    secondaryButtonText: {
        color: '#4B5563',
        fontSize: 15,
        marginRight: 8,
        fontFamily: 'Raleway-Medium'
    },
    arrowContainer: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#004CFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomIndicator: {
        width: 134,
        height: 5,
        backgroundColor: '#1F2937',
        borderRadius: 3,
        marginBottom: 10,
    },


    // Login Screen Styles
    keyboardView: {
        flex: 1,
        justifyContent: 'center',
    },
    loginContent: {
        paddingHorizontal: 20,
    },
    inputContainer: {
        marginBottom: 36,
        marginTop: 17
    },
    inputLabel: {
        fontSize: 16,
        color: '#666',
        marginBottom: 8,
        fontWeight: '500',
    },
    input: {
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 15,
        fontSize: 16,
        color: '#000',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 59,
        marginBottom:7
    },
   cancelButtonText:{
    textAlign:'center',
    fontSize: 16,
    color: '#202020',
    fontWeight: '300',
    fontFamily: 'Raleway-Medium'
   },

//    otp screen 

otpverify:{
    alignItems:'flex-end'
}
})