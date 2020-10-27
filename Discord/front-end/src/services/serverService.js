import httpService from './httpService'
export default {
    query,
    getById,
    create,
    update
}
async function update(server) {
    const updatedServer = await httpService.put(`servers/${server.id}`, server)
    return updatedServer
}

function create({ name, imgUrl }) {
    imgUrl = imgUrl ? imgUrl : DEFAULT_IMG
    const newServer = {
        name,
        imgUrl,
        textChannels: [_getDefaultTextChannel()],
        voiceChannels: [_getDefaultVoiceChannel()],
        createdAt: Date.now(),
    }
    return httpService.post('servers', newServer)
}


async function query() {
    const servers = await httpService.get('servers')
    return servers
}

async function getById(id) {
    const server = await httpService.get(`servers/${id}`)
    return server
}

// function getEmptyServer() {
//     return {

//     }
// }

const DEFAULT_IMG = 'https://previews.123rf.com/images/roxanabalint/roxanabalint1612/roxanabalint161200149/67233420-bullshit-grunge-rubber-stamp-on-white-background-vector-illustration.jpg'

function _getDefaultVoiceChannel() {
    return {}
}
function _getDefaultTextChannel() {
    return {
        "name": "General",
        "id": 1,
        "msgs": [
            {
                "id": "1",
                "content": "test msg 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
                "sentAt": 1600778717385,
                "fromUser": {
                    "name": "Jimmy",
                    "imgUrl": "https://cdn.discordapp.com/avatars/230003441764794368/38a9b51ac90b17ad082f1bedfb088644.png?size=128"
                }
            }
        ]
    }
}

