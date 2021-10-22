console.log({{name: env('CLOUDINARY_NAME'), apikey:env('CLOUDINARY_API_KEY'), apisecret: env('CLOUDINARY_API_SECRET') });

    module.exports = ({ env }) => ({
        upload: {
          provider: 'cloudinary',
          providerOptions: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_API_KEY'),
            api_secret: env('CLOUDINARY_API_SECRET'),
          },
        },    
      });
