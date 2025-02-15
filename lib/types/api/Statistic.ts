import { Common } from '@mailjet/types/api/Common';
import { Message } from '@mailjet/types/api/Message';

export namespace Statistic {
  export enum CampaignOverViewIDType {
    SentCampaign = 'Campaign',
    ABTesting = 'AX',
    Draft = 'NL'
  }

  export enum CampaignOverViewEditMode {
    Tool = 'tool',
    HTML = 'html',
    Tool2 = 'tool2',
    HTML2 = 'html2',
    MJML = 'mjml',
  }

  export enum CampaignOverViewEditType {
    Full = 'full',
    Unknown = 'unknown'
  }

  export enum CounterSource {
    Campaign = 'Campaign',
    APIKey = 'APIKey',
    List = 'List',
    Sender = 'Sender'
  }

  export enum CounterResolution {
    Highest = 'Highest',
    Hour = 'Hour',
    Day = 'Day',
    Lifetime = 'Lifetime'
  }

  export enum CounterTiming {
    Message = 'Message',
    Event = 'Event'
  }

  export enum EmailEvent {
    Open = 'open',
    Click = 'click'
  }

  export interface ICampaignOverView {
    ClickedCount: number;
    DeliveredCount: number;
    EditMode: CampaignOverViewEditMode;
    EditType: CampaignOverViewEditType;
    ID: number;
    IDType: CampaignOverViewIDType;
    OpenedCount: number;
    ProcessedCount: number;
    SendTimeStart: number;
    Starred: boolean;
    Subject: string;
    Title: string;
  }

  export interface IContactStatistic {
    BlockedCount: number;
    BouncedCount: number;
    ClickedCount: number;
    ContactID: number;
    DeferredCount: number;
    DeliveredCount: number;
    HardbouncedCount: number;
    LastActivityAt: string;
    MarketingContacts: number;
    OpenedCount: number;
    ProcessedCount: number;
    QueuedCount: number;
    SoftbouncedCount: number;
    SpamComplaintCount: number;
    UnsubscribedCount: number;
    UserMarketingContacts: number;
    WorkFlowExitedCount: number;
  }

  export interface IGEOStatistic {
    ClickedCount: number;
    OpenedCount: number;
    Country: string;
  }

  export interface IListRecipientStatistic<TData = Array<unknown>> {
    BlockedCount: number;
    BouncedCount: number;
    ClickedCount: number;
    Data: TData;
    DeferredCount: number;
    DeliveredCount: number;
    HardbouncedCount: number;
    LastActivityAt: string;
    ListRecipientID: number;
    OpenedCount: number;
    PreQueuedCount: number;
    ProcessedCount: number;
    QueuedCount: number;
    SoftbouncedCount: number;
    SpamComplaintCount: number;
    UnsubscribedCount: number;
    WorkFlowExitedCount: number;
  }

  export interface IStatCounter {
    APIKeyID: number;
    EventClickDelay: number;
    EventClickedCount: number;
    EventOpenDelay: number;
    EventOpenedCount: number;
    EventSpamCount: number;
    EventUnsubscribedCount: number;
    EventWorkflowExitedCount: number;
    MessageBlockedCount: number;
    MessageClickedCount: number;
    MessageDeferredCount: number;
    MessageHardBouncedCount: number;
    MessageOpenedCount: number;
    MessageQueuedCount: number;
    MessageSentCount: number;
    MessageSoftBouncedCount: number;
    MessageSpamCount: number;
    MessageUnsubscribedCount: number;
    MessageWorkFlowExitedCount: number;
    SourceID: number;
    Timeslice: string;
    Total: number;
  }

  export interface ILinkClickStatistic {
    ClickedEventsCount: number;
    ClickedMessagesCount: number;
    PositionIndex: number;
    URL: string;
  }

  export interface IRecipientESPStatistic {
    AttemptedMessagesCount?: number;
    ClickedMessagesCount?: number;
    DeferredMessagesCount?: number;
    DeliveredMessagesCount?: number;
    HardBouncedMessagesCount?: number;
    ESPName?: string;
    OpenedMessagesCount?: number;
    SoftBouncedMessagesCount?: number;
    SpamReportsCount?: number;
    UnsubscribedMessagesCount?: number;
    OpenRate?: number;
    ClickThroughRate?: number;
    SoftBouncedRate?: number;
    HardBouncedRate?: number;
    UnsubscribedRate?: number;
    SpamReportsRate?: number;
    DeferredRate?: number;
  }

  export interface ITopLinkClicked {
    ClickedCount: number;
    LinkId: number;
    Url: string;
  }

  export interface IUserAgentStatistic {
    Count: number;
    DistinctCount: number;
    Platform: string;
    UserAgent: string;
  }

  // REQUEST PART
  export interface IGetCampaignOverViewQueryParams extends Partial<Common.IPagination> {
    All?: boolean;
    Archived?: boolean;
    Drafts?: boolean;
    ID?: number;
    IDType?: CampaignOverViewIDType;
    Programmed?: boolean;
    Sent?: boolean;
    Starred?: boolean;
    Subject?: string;
  }

  export interface IGetContactStatisticsQueryParams extends Partial<Common.IPagination> {
    Blocked?: boolean;
    Bounced?: boolean;
    Click?: boolean;
    Deferred?: boolean;
    Hardbounced?: boolean;
    LastActivityAt?: string;
    MaxLastActivityAt?: string;
    MinLastActivityAt?: string;
    Open?: boolean;
    Queued?: boolean;
    Sent?: boolean;
    Spam?: boolean;
    Softbounced?: boolean;
    Unsubscribed?: boolean;
  }

  export interface IGetGEOStatisticsQueryParams extends
    Partial<Common.ITimestampPeriod>,
    Partial<Common.IPagination>
  {
    CampaignID?: number;
    ContactsList?: number;
    CustomCampaign?: string;
    From?: string;
    FromDomain?: string;
    FromID?: number;
    FromType?: Message.FromType;
    IsDeleted?: boolean;
    IsNewsletterTool?: boolean;
    IsStarred?: boolean;
    MessageStatus?: Message.MessageStatus;
    Period?: Common.Period;
  }

  export interface IGetListRecipientStatisticsQueryParams extends Partial<Common.IPagination> {
    Blocked?: boolean;
    Bounced?: boolean;
    Click?: boolean;
    Contact?: number;
    ContactsList?: number;
    IsExcludedFromCampaigns?: boolean;
    IsUnsubscribed?: boolean;
    LastActivityAt?: string;
    MaxLastActivityAt?: string;
    MinLastActivityAt?: string;
    MaxUnsubscribedAt?: string;
    MinUnsubscribedAt?: string;
    Open?: boolean;
    Queued?: boolean;
    Sent?: boolean;
    ShowExtraData?: boolean;
    Spam?: boolean;
    TimeZone?: string;
    Unsubscribed?: boolean;
  }

  export interface IGetStatCountersQueryParams extends
    Partial<Common.ITimestampPeriod>,
    Partial<Common.IPagination>
  {
    CounterSource: CounterSource;
    CounterResolution: CounterResolution;
    CounterTiming: CounterTiming;
    SourceID?: number;
  }

  export interface IGetLinkClickStatisticsQueryParams extends Partial<Common.IPagination> {
    CampaignID: number;
  }

  export interface IGetRecipientESPStatisticsQueryParams extends
    IGetLinkClickStatisticsQueryParams
  {
    ESP_Name?: number;
  }

  export interface IGetTopLinkClickedQueryParams extends
    Partial<Common.ITimestampPeriod>,
    Partial<Common.IPagination>
  {
    ActualClicks?: boolean;
    CampaignID?: number;
    Contact?: number;
    ContactsList?: number;
    CustomCampaign?: string;
    From?: string;
    FromDomain?: string;
    FromID?: number;
    FromType?: Message.FromType;
    IsDeleted?: boolean;
    IsNewsletterTool?: boolean;
    IsStarred?: boolean;
    Message?: number;
    Period?: Common.Period;
  }

  export interface IGetUserAgentStatisticsQueryParams extends
    Partial<Common.ITimestampPeriod>,
    Partial<Common.IPagination>
  {
    CampaignID?: number;
    ContactsList?: number;
    CustomCampaign?: string;
    Event?: EmailEvent;
    ExcludePlatform?: string;
    From?: string;
    FromDomain?: string;
    FromID?: number;
    FromType?: Message.FromType;
    IsDeleted?: boolean;
    IsNewsletterTool?: boolean;
    IsStarred?: boolean;
    Period?: Common.Period;
    Platform?: string;
  }

  // RESPONSE PART
  export type TGetCampaignOverViewResponse = Common.IResponse<ICampaignOverView[]>;

  export type TGetContactStatisticsResponse = Common.IResponse<IContactStatistic[]>;

  export type TGetGEOStatisticsResponse = Common.IResponse<IGEOStatistic[]>;

  export type TGetListRecipientStatisticsResponse<TData = Array<unknown>> =
    Common.IResponse<Array<IListRecipientStatistic<TData>>>;

  export type TGetStatCountersResponse = Common.IResponse<IStatCounter[]>;

  export type TGetLinkClickStatisticsResponse = Common.IResponse<ILinkClickStatistic[]>;

  export type TGetRecipientESPStatisticsResponse = Common.IResponse<IRecipientESPStatistic[]>;

  export type TGetTopLinkClickedResponse = Common.IResponse<ITopLinkClicked[]>;

  export type TGetUserAgentStatisticsResponse = Common.IResponse<IUserAgentStatistic[]>;
}
