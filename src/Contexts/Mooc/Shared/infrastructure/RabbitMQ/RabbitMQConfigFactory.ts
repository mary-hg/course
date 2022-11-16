import { ConnectionSettings } from '../../../../Shared/infrastructure/EventBus/RabbitMQ/ConnectionSettings';
import { ExchangeSetting } from '../../../../Shared/infrastructure/EventBus/RabbitMQ/ExchangeSetting';
import config from '../config';

export type RabbitMQConfig = {
  exchangeSettings: ExchangeSetting,
  connectionSettings: ConnectionSettings
}
export class RabbitMQConfigFactory {
  static createConfig(): RabbitMQConfig {
    return config.get('rabbitmq');
  }
}
