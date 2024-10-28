import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('item_db')
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name_aegis: string;
  
  @Column()
  name_english: string;
  
  @Column()
  type: string;
  
  @Column()
  subtype: string;
  
  @Column()
  price_buy: number;
  
  @Column()
  price_sell: number;
  
  @Column()
  weight: number;
  
  @Column()
  attack: number;
  
  @Column()
  defense: number;
  
  @Column()
  range: number;
  
  @Column()
  slots: number;
  
  @Column()
  job_all: boolean;
  
  @Column()
  job_acolyte: boolean;
  
  @Column()
  job_alchemist: boolean;
  
  @Column()
  job_archer: boolean;
  
  @Column()
  job_assassin: boolean;
  
  @Column()
  job_barddancer: boolean;
  
  @Column()
  job_blacksmith: boolean;
  
  @Column()
  job_crusader: boolean;
  
  @Column()
  job_gunslinger: boolean;
  
  @Column()
  job_hunter: boolean;
  
  @Column()
  job_knight: boolean;
  
  @Column()
  job_mage: boolean;
  
  @Column()
  job_merchant: boolean;
  
  @Column()
  job_monk: boolean;
  
  @Column()
  job_ninja: boolean;
  
  @Column()
  job_novice: boolean;
  
  @Column()
  job_priest: boolean;
  
  @Column()
  job_rogue: boolean;
  
  @Column()
  job_sage: boolean;
  
  @Column()
  job_soullinker: boolean;
  
  @Column()
  job_stargladiator: boolean;
  
  @Column()
  job_supernovice: boolean;
  
  @Column()
  job_swordman: boolean;
  
  @Column()
  job_taekwon: boolean;
  
  @Column()
  job_thief: boolean;
  
  @Column()
  job_wizard: boolean;
  
  @Column()
  class_all: boolean;
  
  @Column()
  class_normal: boolean;
  
  @Column()
  class_upper: boolean;
  
  @Column()
  class_baby: boolean;
  
  @Column()
  gender: string;
  
  @Column()
  location_head_top: boolean;
  
  @Column()
  location_head_mid: boolean;
  
  @Column()
  location_head_low: boolean;
  
  @Column()
  location_armor: boolean;
  
  @Column()
  location_right_hand: boolean;
  
  @Column()
  location_left_hand: boolean;
  
  @Column()
  location_garment: boolean;
  
  @Column()
  location_shoes: boolean;
  
  @Column()
  location_right_accessory: boolean;
  
  @Column()
  location_left_accessory: boolean;
  
  @Column()
  location_costume_head_top: boolean;
  
  @Column()
  location_costume_head_mid: boolean;
  
  @Column()
  location_costume_head_low: boolean;
  
  @Column()
  location_costume_garment: boolean;
  
  @Column()
  location_ammo: boolean;
  
  @Column()
  location_shadow_armor: boolean;
  
  @Column()
  location_shadow_weapon: boolean;
  
  @Column()
  location_shadow_shield: boolean;
  
  @Column()
  location_shadow_shoes: boolean;
  
  @Column()
  location_shadow_right_accessory: boolean;
  
  @Column()
  location_shadow_left_accessory: boolean;
  
  @Column()
  weapon_level: boolean;
  
  @Column()
  armor_level: boolean;
  
  @Column()
  equip_level_min: number;
  
  @Column()
  equip_level_max: number;
  
  @Column()
  refineable: boolean;
  
  @Column()
  view: number;
  
  @Column()
  alias_name: string;
  
  @Column()
  flag_buyingstore: boolean;  
  
  @Column()
  flag_deadbranch: boolean;
  
  @Column()
  flag_container: boolean;
  
  @Column()
  flag_uniqueid: boolean;
  
  @Column()
  flag_bindonequip: boolean;
  
  @Column()
  flag_dropannounce: boolean;
  
  @Column()
  flag_noconsume: boolean;
  
  @Column()
  flag_dropeffect: string;
  
  @Column()
  delay_duration: number;
  
  @Column()
  delay_status: string;
  
  @Column()
  stack_amount: number;
  
  @Column()
  stack_inventory: boolean;
  
  @Column()
  stack_cart: boolean;
  
  @Column()
  stack_storage: boolean;
  
  @Column()
  stack_guildstorage: boolean;
  
  @Column()
  nouse_override: number;
  
  @Column()
  nouse_sitting: boolean;
  
  @Column()
  trade_override: number;
   
  @Column()
  trade_nodrop: boolean;
  
  @Column()
  trade_notrade: boolean;
  
  @Column()
  trade_tradepartner: boolean;
  
  @Column()
  trade_nosell: boolean;
  
  @Column()
  trade_nocart: boolean;
  
  @Column()
  trade_nostorage: boolean;
  
  @Column()
  trade_noguildstorage: boolean;
  
  @Column()
  trade_nomail: boolean;
  
  @Column()
  trade_noauction: boolean;
  
  @Column()
  script: string;
  
  @Column()
  equip_script: string;
  
  @Column()
  unequip_script: string;
}