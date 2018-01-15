import * as crypto from 'crypto';

const AES_KEY = 'yyfax';

export const UtilProvider = {
    provide: 'util',
    useValue: {
        decrypt: (encrypted) => {
            try {
                const decipher = crypto.createDecipher('aes192', AES_KEY);
                let decrypted = decipher.update(encrypted, 'hex', 'utf8');
                decrypted += decipher.final('utf8');
                return decrypted;
            }
            catch (ex) {
                return '';
            }
        }
    }
};